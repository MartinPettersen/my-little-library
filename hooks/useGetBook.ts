import { useEffect, useState } from "react";
import { BookType, ResponseType } from "../utils/types";


export const useGetBook = (ean: string) => {

    const [bookInformation, setBookInformation] = useState<ResponseType | null>(null);

    useEffect(() => {
        const fetchBookInformation = async () => {
            try {
                const url = `https://openlibrary.org/search.json?q=9780465023943`

                const res = await fetch(url);
                const data = await res.json();
                setBookInformation(data)
            } catch (error) {
                console.log(error);
            }
        }

        if (ean) {
            fetchBookInformation();
        }

    }, [ean])

    return bookInformation
}