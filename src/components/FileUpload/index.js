import { client } from 'client'

export function FileUpload({setFile}) {
  const uploadImage = (file) => {
    return client.post(`/upload`, file)
      .then(res => res.data)
      .catch((err) => console.log(err))
  }

  const handleFileUpload = async (e) => {
    const file = new FormData()
    file.append("myFile", e.target.files[0])
    
    uploadImage(file)
      .then(response => setFile(response.path))
      .catch(err => console.log("Error while uploading the file: ", err))
  }

  return <input 
    type="file" 
    name="myFile" 
    onChange={handleFileUpload} 
    />
}