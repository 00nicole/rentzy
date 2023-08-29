'use client';
import {BiSearch} from 'react-icons/bi';
const Search = () =>{
    return ( 
        <div
          className="
            border-[2px] 
            w-full 
            md:w-auto 
            py-2 
            square-full
            shadow-sm 
            hover:shadow-md 
            transition 
            cursor-pointer
          "
        >
        <div
            className="
                flex
                flex-row
                items-center
                justify-between
            "
            >
                <div
                    className="
                        text-sm
                        font-semibold
                        px-6
                        border-x-[1px]
                    "
                >
                  Location
                </div>
                    <div
                        className="
                            text-sm 
                            pl-6 
                            pr-2 
                            font-semibold 
                            flex 
                            flex-row 
                            items-center 
                            gap-3
                        ">
                        <div className="hidden sm:block">Dates</div>
                        <div
                            className="
                                p-2
                                bg-blue-900
                                rounded-full
                                text-white
                                items-center
                                ">
                                <BiSearch size={18} />
                        </div>
                 </div>
            </div>
        </div>
    );
}
export default Search;