import axios from 'axios'
export default class {
  static getData() {
    return [
      {id: 1, name: 'Nguyễn Trường Nhân'},
      {id: 2, name: 'Nguyễn Trường Ren'}
    ]
  }
  static async syncData() {
    let result = await axios.get('/api/v1/user/list');
    return result.data;
  }  
}