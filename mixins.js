import axios from 'axios'

export default {
  methods: {
    async get(url, method, data) {
      return (await axios({ method, url, data })).catch((e) => {
        console.log(e)
      }).data
    }
  }
}
