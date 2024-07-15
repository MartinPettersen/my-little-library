export type RootStackParamList = {
    Book: {type: string, data: string};
    Scan: undefined;
    Home: undefined;
};

export type BookType = {
    _version_: number;
    already_read_count: number;
    author_alternative_name: string[];
    author_facet: string[];
    author_key: string[];
    author_name: string[];
    contributor: string[];
    cover_edition_key: string;
    cover_i: number;
    currently_reading_count: number;
    ddc: string[];
    ddc_sort: string;
    ebook_access: string;
    ebook_count_i: number;
    edition_count: number;
    edition_key: string[];
    first_publish_year: number;
    first_sentence: string[];
    format: string[];
    has_fulltext: boolean;
    ia: string[];
    ia_box_id: string[];
    ia_collection: string[];
    ia_collection_s: string;
    id_goodreads: string[];
    id_librarything: string[];
    isbn: string[];
    key: string;
    language: string[];
    last_modified_i: number;
    lcc: string[];
    lcc_sort: string;
    lccn: string[];
    number_of_pages_median: number;
    oclc: string[];
    osp_count: number;
    printdisabled_s: string;
    public_scan_b: boolean;
    publish_date: string[];
    publish_place: string[];
    publish_year: number[];
    publisher: string[];
    publisher_facet: string[];
    ratings_average: number;
    ratings_count: number;
    ratings_count_1: number;
    ratings_count_2: number;
    ratings_count_3: number;
    ratings_count_4: number;
    ratings_count_5: number;
    ratings_sortable: number;
    readinglog_count: number;
    seed: string[];
    subject: string[];
    subject_facet: string[];
    subject_key: string[];
    subtitle: string;
    title: string;
    title_sort: string;
    title_suggest: string;
    type: string;
    want_to_read_count: number;
  };
  
export type ResponseType = {
    docs: BookType[];
    numFound: number;
    numFoundExact: boolean;
    num_found: number;
    offset: number | null;
    q: string;
    start: number;
  };
  