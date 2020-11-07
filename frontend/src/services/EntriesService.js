import Api from '@/services/Api'

export default {
  fetchButtons (params) {
    return Api().get('buttons/' + params.typeId)
  },
  fetchProfile () {
    return Api().get('profiles/')
  }
}
