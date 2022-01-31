
import $api from '../http/index'

export default class FileService{
    static async uploadFile(file: any, data: any, text: string, usernameAccount: string){
        try{
            const formData = new FormData();
            if(!data || !text || !usernameAccount){
                console.log('Не хватает данных')
                return
            }
            formData.append('file', file)
            formData.append('data', data)
            formData.append('text', text)
            formData.append('username', usernameAccount)
            const response = await $api.post(`/upload`,formData);
            console.log(response)
        }catch(e:any){
            alert(e)
        }
    }


}