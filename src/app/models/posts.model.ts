
export interface PostPreview {
    id: string
    text: string
    image: string
    likes: number
    tags: string[]
    publishDate: string
    owner: object
    }


    export interface PostCreate{
      
text: string
image: string
likes: number
tags: string[]
owner: string

    }

export interface PostEdit{
    text: string
}