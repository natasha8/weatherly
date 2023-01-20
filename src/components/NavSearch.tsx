import { ChangeEvent } from 'react';
import { forecastType, optionType } from './types/types';
import Header from './Header';
import { FcSearch } from 'react-icons/fc';

type Props = {
    info: forecastType
    city: string
    options: []
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onSelect: (option: optionType) => void
    onSubmit: () => void
}

const NavSearch = ({ city, options, info, onInputChange, onSelect, onSubmit }: Props): JSX.Element => {



    return (
        <div className="relative w-full flex flex-col xl:flex-row bg-white/40 backdrop-blur-lg drop-shadow-lg rounded-b-xl">
            <Header info={info} />
            <div className='w-full xl:w-1/3 flex'>
                <input type="text" name="city" className="w-full rounded-l-xl m-1 px-3 xl:text-xl xl:my-4" onChange={onInputChange} value={city} />
                <ul className='absolute top-32 xl:top-20  z-[99] bg-pink-100/95 rounded-b-md w-full xl:w-1/3'>


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
                <button className="w-1/6 rounded-r-xl m-1 uppercase border-2 border-white flex items-center justify-center xl:my-4 xl:mr-2" >
                    <FcSearch className='text-3xl' onClick={onSubmit} />
                </button>
            </div>

        </div>
    )
}

export default NavSearch