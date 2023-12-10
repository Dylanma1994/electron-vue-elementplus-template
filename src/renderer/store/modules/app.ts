import { defineStore } from 'pinia'

interface AppState {
  breadcrumb: boolean,
  breadcrumbIcon: boolean,
  collapse: boolean,
  locale: boolean,
  title: string,
  isDark: boolean,
  pageLoading: boolean,
  dynamicRouter: boolean,
  screenFull: boolean,
  uniqueOpened: boolean,
  tagsView: boolean
}

export const useAppStore = defineStore('app', {
  state: (): AppState => {
    return {
      breadcrumb: true,
      breadcrumbIcon: true,
      collapse: true,
      locale: true,
      title: 'Web3-toolbox',
      isDark: false,
      pageLoading: false,
      dynamicRouter: false,
      screenFull: true,
      uniqueOpened: false,
      tagsView: true
    }
  },
  getters: {
    getBreadcrumb(): boolean {
      return this.breadcrumb
    },
    getBreadcrumbIcon(): boolean {
      return this.breadcrumbIcon
    },
    getCollapse(): boolean {
      return this.collapse
    },
    getTagsView(): boolean {
      return this.tagsView
    },
    getUniqueOpened(): boolean {
      return this.uniqueOpened
    },
    getScreenFull(): boolean {
      return this.screenFull
    },
    getLocale(): boolean {
      return this.locale
    },
    getDynamicRouter(): boolean {
      return this.dynamicRouter
    },
    getPageLoading(): boolean {
      return this.pageLoading
    },
    getTitle(): string {
      return this.title
    },
    getIsDark(): boolean {
      return this.isDark
    }
  },
  actions: {
    setBreadcrumb(breadcrumb: boolean) {
      this.breadcrumb = breadcrumb
    },
    setBreadcrumbIcon(breadcrumbIcon: boolean) {
      this.breadcrumbIcon = breadcrumbIcon
    },
    setCollapse(collapse: boolean) {
      this.collapse = collapse
    },
    setUniqueOpened(uniqueOpened: boolean) {
      this.uniqueOpened = uniqueOpened
    },
    setScreenFull(screenFull: boolean) {
      this.screenfull = screenFull
    },
    setLocale(locale: boolean) {
      this.locale = locale
    },
    setDynamicRouter(dynamicRouter: boolean) {
      this.dynamicRouter = dynamicRouter
    },
    setPageLoading(pageLoading: boolean) {
      this.pageLoading = pageLoading
    },
    setTitle(title: string) {
      this.title = title
    },
    setIsDark(isDark: boolean) {
      this.isDark = isDark
      if (this.isDark) {
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
      } else {
        document.documentElement.classList.add('light')
        document.documentElement.classList.remove('dark')
      }
    }
  }
})
