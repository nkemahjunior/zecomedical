
export interface sort{

    sorted: boolean,
    unsorted: boolean,
    empty: boolean
    
}

export interface pageable{
   
    pageNumber: number,
    pageSize: number,
    sort:sort,
    offset: number,
    paged: boolean,
    unpaged: boolean

}




