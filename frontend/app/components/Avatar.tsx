import Image from "next/image"

 


function Avatar(src: any){
    return(
        <Image src={src} width={50} height={50} objectFit="cover" alt="avatar" />
    )
}

export default Avatar;