<template>
  <VPopup v-model="popupOpen" class="online-registry" fixed :auto-close="false">
    <div class="online-registry-header">
      <VIcon icon="mdi-web" class="online-registry-header-title-icon" />
      <div class="online-registry-header-title">
        在线仓库
      </div>
      <VIcon
        icon="mdi-refresh"
        :size="22"
        class="online-registry-header-refresh-icon"
        title="刷新"
        @click="fetchFeatures()"
      />
      <VIcon
        icon="mdi-close"
        :size="24"
        class="online-registry-header-close-icon"
        title="关闭"
        @click="popupOpen = false"
      />
    </div>
    <div class="online-registry-header">
      <div class="online-registry-header-search">
        <VIcon icon="search" :size="18" />
        <TextBox
          v-model="searchKeyword"
          placeholder="搜索功能"
        />
      </div>
      <div class="online-registry-header-branch">
        分支:
        <VDropdown v-model="selectedBranch" :items="registryBranches">
          <template #item="{ item }">
            {{ item }}
          </template>
        </VDropdown>
      </div>
    </div>
    <div class="online-registry-separator"></div>
    <div ref="content" class="online-registry-content">
      <VLoading v-if="loading" />
      <VEmpty v-if="!loading && !list.length" />
      <RegistryItem
        v-for="item of filteredList"
        :key="item.name"
        :item="item"
      />
      <!-- <RegistryItem
        v-for="item of packList"
        :key="item.name"
        :item="item"
      /> -->
    </div>
  </VPopup>
</template>
<script lang="ts">
import { monkey } from '@/core/ajax'
import { cdnRoots } from '@/core/cdn-types'
import { meta } from '@/core/meta'
import { getGeneralSettings } from '@/core/settings'
import { logError } from '@/core/utils/log'
import {
  VIcon,
  VDropdown,
  TextBox,
  VPopup,
  VLoading,
  VEmpty,
} from '@/ui'
import Fuse from 'fuse.js'
import { DocSourceItem } from 'registry/lib/docs'
import RegistryItem from './RegistryItem.vue'
import { registryBranches } from './third-party'

const general = getGeneralSettings()
export default Vue.extend({
  components: {
    VIcon,
    VDropdown,
    TextBox,
    VPopup,
    RegistryItem,
    VLoading,
    VEmpty,
  },
  props: {
    open: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    const branches = [
      general.registryBranch,
      meta.compilationInfo.branch,
      registryBranches[0],
    ].filter(it => registryBranches.includes(it) && Boolean(it))
    return {
      searchKeyword: '',
      popupOpen: false,
      loading: false,
      list: [],
      filteredList: [],
      // packList: [],
      fuse: null,
      registryBranches,
      selectedBranch: branches[0],
    }
  },
  watch: {
    searchKeyword: lodash.debounce(function updateList(keyword: string) {
      if (!keyword) {
        this.filteredList = this.list
        return
      }
      const fuse = this.fuse as Fuse<DocSourceItem>
      const fuseResult = fuse.search(keyword)
      this.filteredList = fuseResult.map(it => it.item)
      this.$nextTick().then(() => this.$refs.content.scrollTo(0, 0))
    }, 200),
    selectedBranch(newBranch: string) {
      general.registryBranch = newBranch
      this.fetchFeatures()
    },
  },
  mounted() {
    this.fetchFeatures()
  },
  methods: {
    async fetchFeatures() {
      if (this.loading) {
        return
      }
      const fetchPath = cdnRoots[general.cdnRoot](this.selectedBranch)
      try {
        this.loading = true
        const featureListUrl = `${fetchPath}doc/features/features.json`
        const packListUrl = `${fetchPath}doc/features/pack/pack.json`
        const featureList = await monkey({
          url: featureListUrl,
          responseType: 'json',
        })
        const packList = await monkey({
          url: packListUrl,
          responseType: 'json',
        })
        if (!Array.isArray(featureList) || !Array.isArray(packList)) {
          console.error('Fetch failed:', featureList, packList, featureListUrl, packListUrl)
          throw new Error('获取在线仓库数据失败, 请尝试在通用设置中设置其他更新源, 然后再试一次.')
        }
        this.list = [...packList, ...featureList]
        this.fuse = new Fuse(this.list, {
          keys: ['displayName', 'name', 'description'],
        })
        this.searchKeyword = ''
        this.filteredList = [...this.list]
      } catch (error) {
        logError(error)
      } finally {
        this.loading = false
      }
    },
  },
})
</script>
<style lang="scss">
@import "common";

.online-registry {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.95);
  width: 360px;
  height: 85vh;
  z-index: 100002;
  transition: .2s ease-out;
  font-size: 14px;
  @include v-stretch();
  @include popup();
  &.open {
    transform: translate(-50%, -50%) scale(1);
  }
  &-header {
    padding: 12px;
    @include h-center(12px);
    & + & {
      padding-top: 0;
    }
    &-title {
      flex: 1;
      font-size: 18px;
      font-weight: bold;
    }
    &-search {
      flex: 1;
      justify-content: center;
      @include h-center(6px);
      .be-textbox {
        max-width: 320px;
        flex: 1;
        font-size: 12px;
      }
    }
    &-branch {
      @include h-center(6px);
      font-size: 12px;
    }
    &-refresh-icon,
    &-close-icon {
      padding: 2px;
      cursor: pointer;
      transition: .3s ease-out;
      &:hover {
        color: var(--theme-color);
      }
    }
    &-refresh-icon {
      padding: 3px;
      &:hover {
        transform: rotate(360deg);
      }
    }
  }
  &-separator {
    height: 1px;
    width: calc(100% - 24px);
    margin: 0 12px;
    background-color: #8882;
  }
  &-content {
    flex: 1;
    padding: 4px 0;
    @include no-scrollbar();
    .be-loading,
    .be-empty {
      margin: 12px 0;
    }
  }
}
</style>
