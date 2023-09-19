export interface Posts {
    id: number;
    title: string;
    descrip: string;
    img: string;
    date: string;
    uid: number;
    cat: string | null;
}
export interface Post {
    username:string;
    title: string;
    descrip: string;
    img: string;
    userImg:string;
    date: string;
    cat: string | null;
}