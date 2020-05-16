const STORAGE_KEY = 'localstorage-vuejs'
export default {
    fetch() {
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY)|| '[]')
    },
    save(items) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))//stringify将键与值全部转化为字符串
    }
}