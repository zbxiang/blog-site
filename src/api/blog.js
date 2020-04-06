import axios from 'axios'

const API = process.env.VUE_APP_BLOG_URL

export function listBlog() {
  return axios({
    method: 'get',
    url: `${API}/blog/list`
  })
}

export function getBlog(id) {
  return axios({
    method: 'get',
    url: `${API}/blog/getBlog`,
    params: { id }
  })
}
