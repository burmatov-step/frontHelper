
import $api from '../http/index'

export default class FileService{
    static async uploadFile(file: any, data: any, text: string, usernameAccount: string, currentTime: string){
        try{
            const formData = new FormData();
            if(!data || !text || !usernameAccount){
                console.log('Не хватает данных')
                return
            }
            formData.append('file', file)
            formData.append('currentTime', currentTime)
            formData.append('data', data)
            formData.append('text', text)
            formData.append('username', usernameAccount)
            const response = await $api.post(`/upload`,formData);
            return response
        }catch(e:any){
            alert(e)
        }
    }


}