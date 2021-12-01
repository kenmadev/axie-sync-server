import Head from 'next/head';
import styled from 'styled-components';
import { useState } from 'react';
import { isValidRonin, getAxios } from '../helpers/utils';
import moment from 'moment';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';

const Home = () => {
  const [ronin, setRonin] = useState('');
  const [battles, setBattles] = useState([]);
  const [requested, setRequested] = useState(false);
  const [error, setError] = useState('');

  const onRoninChange = e => {
    const theRonin = e.target.value;
    setRonin(theRonin.replace('ronin:', '0x'));
    if (!isEqual(theRonin, ronin)) {
      setBattles([]);
      setRequested(false);
    }

    setError('');
    e.preventDefault();
  };

  const getBattles = async () => {
    const { data: result } = await getAxios().get(`/api/battles/${ronin}`);
    if (!isEmpty(result)) {
      setBattles(result);
      setRequested(true);
    } else {
      setError('Empty results');
    }
  };

  const onSearch = () => {
    try {
      if (!isValidRonin(ronin)) {
        return setError('The provided ronin address is invalid');
      }

      getBattles();
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  const renderBattles = () => {
    if (!isEmpty(error)) {
      return <ErrorBox className='text-white p-5'>{error}</ErrorBox>;
    }

    return (
      <Battles className=''>
        {battles.map((battle, index) => {
          const clients = [battle.firstClientId, battle.secondClientId];
          const winnerClient = clients[battle.winner];
          const isRoninWinner = isEqual(winnerClient, ronin);
          const date = moment(battle.createdAt).format(
            'MMM DD YYYY, h:mm:ss a'
          );
          const wonResut = isRoninWinner ? renderWon() : renderLose();
          return (
            <Battle
              className='mb-2 text-white flex items-start justify-between'
              key={`battle-${index}`}
            >
              <div className='m-5'>
                <div className='text-left'>
                  <a href={`axie://?f=rpl&q=${battle.uuid}`}>{battle.uuid}</a>
                </div>
                <div className='text-sm text-left text-gray-400'>{date}</div>
              </div>
              <div className='m-5'>{wonResut}</div>
            </Battle>
          );
        })}
      </Battles>
    );
  };

  const renderWon = () => (
    <span className='text-sm font-semibold inline-block py-0 px-1 rounded text-green-600 bg-green-200 last:mr-0 mr-1'>
      Victory
    </span>
  );

  const renderLose = () => (
    <span className='text-sm font-semibold inline-block py-0 px-1 rounded text-red-600 bg-red-200 last:mr-0 mr-1'>
      Defeat
    </span>
  );

  return (
    <Wrapper className='dark'>
      <div className='flex flex-col items-center justify-center  min-h-screen py-2'>
        <Head>
          <title>Axie Battle Sync</title>
        </Head>

        <MainList className='flex flex-col w-full flex-1 text-center container mx-auto'>
          <div>
            <div className='pt-14 mx-2 md:mx-0  pb-16 px-5 md:px-10 mb-6 rounded-lg'>
              <h1 className='text-gray-50 text-4xl md:text-5xl font-bold'>
                Axie Battle <span className='text-blue-600'>Search</span>
              </h1>

              <div className='flex items-center flex-row justify-center'>
                <div className='pt-4 md:pt-4 w-full'>
                  <div className='sm:w-full pb-6'>
                    <p className='text-md md:text-1xl text-center text-gray-50'>
                      View your scholars battle logs
                    </p>
                  </div>
                  <div className='flex flex-wrap sm:w-full'>
                    <div className='relative w-full text-left'>
                      <label className='block text-sm ml-1 text-gray-50 pb-1 font-medium'>
                        Ronin Address
                      </label>
                      <input
                        onChange={onRoninChange}
                        className='w-full h-10 pl-3 pr-8 py-6 text-base placeholder-gray-600 border rounded-sm focus:shadow-outline'
                        type='text'
                        placeholder='Enter Ronin Address'
                      />
                    </div>
                  </div>
                  <div
                    className='mx-1 md:mx-0 bg-gray-800 rounded-b text-gray-50 px-4 py-4 text-left my-2'
                    role='alert'
                  >
                    <div className='flex flex-wrap items-center'>
                      <div>
                        <p className='text-sm'>
                          It doesn&apos;t matter if you use the{' '}
                          <span className='text-sm font-semibold inline-block py-0 px-1 rounded text-blue-600 bg-blue-200 last:mr-0 mr-1'>
                            ronin:
                          </span>{' '}
                          or{' '}
                          <span className='text-sm font-semibold inline-block py-0 px-1 rounded text-blue-600 bg-blue-200 last:mr-0 mr-1'>
                            0x
                          </span>{' '}
                          prefix on the address, they both return the same
                          thing.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-col items-right mt-6 sm:w-full'>
                    <button
                      onClick={onSearch}
                      className='flex-shrink-0 bg-blue-600 text-white text-base font-semibold py-3 px-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200'
                    >
                      Search Battle History
                    </button>
                  </div>
                </div>
              </div>

              <div className='pt-10 '>{renderBattles()}</div>
            </div>
          </div>
        </MainList>

        <footer className='flex flex-col items-center justify-center w-full h-16 border-t border-gray-900'>
          <a
            className='flex items-center justify-center text-white'
            href='#'
            target='_blank'
            rel='noopener noreferrer'
          >
            Made with ❤ by <span className='font-bold ml-1'>Kenma</span>
          </a>
        </footer>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #1a202c;
`;

const MainList = styled.main`
  width: 820px;
`;

const Battles = styled.div``;

const Battle = styled.div`
  background-color: #282b39;

  a:hover {
    text-decoration: underline;
  }
`;

const ErrorBox = styled.div`
  background-color: #282b39;
`;

export default Home;
