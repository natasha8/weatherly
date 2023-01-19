import { ChangeEvent } from 'react';
import { optionType } from './types/types';
import { FcSearch } from "react-icons/fc"

type Props = {
    city: string
    options: []
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onSelect: (option: optionType) => void
    onSubmit: () => void
}

const Search = ({ city, options, onInputChange, onSelect, onSubmit }: Props): JSX.Element => {


    return (
        <div className="relative w-full xl:w-4/5 2xl:w-1/3 flex">
            <input type="text" name="city" className="w-full h-12 rounded-l-xl px-3 xl:text-xl" onChange={onInputChange} value={city} />
            <ul className='absolute top-14 z-[99] bg-white/90 rounded-b-md w-full'>


                {options.map((option: optionType, index: number) => (
                    <li key={option.name + "_" + index} className="pt-6">
                        <button
                            className="text-left text-sm xl:text-lg w-full hover:bg-cyan-700 hover:text-white px-2 py-1 cursor-pointer"
                            onClick={() => onSelect(option)}
                        >
                            {option.name}, {option.country}, {option.state}
                        </button>
                    </li>
                ))}
            </ul>
            <button className="w-1/6 rounded-r-xl h-12 uppercase border-2 border-white flex items-center justify-center" >
                <FcSearch className='text-3xl' onClick={onSubmit} />
            </button>
        </div>
    )
}

export default Search