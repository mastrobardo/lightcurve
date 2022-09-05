
import { Wrapper } from '@components/Wrapper/Wrapper';
import './page.style.scss';
import './formpage.style.scss';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

type TBody = {
  gender: string;
  name: string;
  album?: string;
  book?: string;
  sport?: string;
};

export const FormPage = () => {
  // probably here it would have been better to use useReducer
  const [gender, setGender] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [album, setAlbum] = useState<string>('');
  const [book, setBook] = useState<string>('');
  const [sport, setSport] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>) => {
    switch ((event.target as HTMLElement).id) {
      case 'gender': setGender((event.target as HTMLInputElement).value); break;
      case 'album': setAlbum((event.target as HTMLInputElement).value); break;
      case 'book': setBook((event.target as HTMLInputElement).value); break;
      case 'sport': setSport((event.target as HTMLInputElement).value); break;
      case 'name': setName((event.target as HTMLInputElement).value); break;
    }
  };
  
  const validateInput = (input: string) => {
    if (input.length < 2 || input.length > 30) return false;
    return true;
  };

  const postToServer = async (body: TBody) => {
    const suffix = Math.floor(Math.random() * 10) > 5 ? 'form' : 'formnay';
    try {
      const response = await fetch(`https://lightcurve.free.beeceptor.com/${suffix}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        //@ts-ignore
        body: body,
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      alert('There was an error with your request');
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let optionalInput = '';
    const body: TBody = { gender, name };
    if (gender !== '' && validateInput(name)) {
      switch (gender) {
        case 'male': optionalInput = body.album = album; break;
        case 'female': optionalInput = body.book = book; break;
        case 'nonbinary': optionalInput = body.sport = sport; break;
      }
    } else {
      return alert('Name and gender are required and name must be long from 2 to 30 characters');
    }
    if (!validateInput(optionalInput)) {
      return alert('the optional param must be long must be long from 2 to 30 characters');
    }
    postToServer(body);
  };

  return (
  <div className="formpage">
    <h1 className='ledger__title text-3xl font-bold py-4'>Tell us about you</h1>
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <div className='inputs__required'>
          <input type="text" onChange={handleChange} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your name" />
          <select onChange={handleChange} id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option defaultValue="">Choose your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="nonbinary">Non Binary</option>
          </select>
        </div>
        {gender === 'male' ? <input onChange={handleChange} type="text" value={album} id="album" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Favourite album" /> : null}
        {gender === 'female' ? <input onChange={handleChange} type="text" value={book} id="book" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Favourite book" /> : null}
        {gender === 'nonbinary' ? <input onChange={handleChange} type="text" value={sport} id="sport" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Favourite sport" /> : null}
        <button type="submit" className="submit rounded bg-red-400" >Submit</button>
      </form>
      <Link className='link rounded bg-green-400 left' to="/">HOME</Link>
    </Wrapper>
  </div>

  );
};