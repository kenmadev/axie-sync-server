import Head from 'next/head';
import styled from 'styled-components';

const Home = () => {
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
                Axie Battle{' '}
                <span className='text-blue-600 dark:text-blue-500'>Search</span>
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
                        className='w-full h-10 pl-3 pr-8 py-6 text-base placeholder-gray-600 border rounded-sm focus:shadow-outline'
                        type='text'
                        placeholder='Enter Ronin Address'
                      />
                    </div>
                  </div>
                  <div
                    className='mx-1 md:mx-0 bg-gray-800 rounded-b text-gray-50 px-4 py-4 text-left my-2 dark:text-gray-300 dark:border-gray-500'
                    role='alert'
                  >
                    <div className='flex flex-wrap items-center'>
                      <div>
                        <p className='text-sm'>
                          It doesn't matter if you use the{' '}
                          <span class='text-sm font-semibold inline-block py-0 px-1 rounded text-blue-600 bg-blue-200 last:mr-0 mr-1'>
                            ronin:
                          </span>{' '}
                          or{' '}
                          <span class='text-sm font-semibold inline-block py-0 px-1 rounded text-blue-600 bg-blue-200 last:mr-0 mr-1'>
                            0x
                          </span>{' '}
                          prefix on the address, they both return the same
                          thing.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-col items-right mt-6 sm:w-full'>
                    <button className='flex-shrink-0 bg-blue-600 text-white text-base font-semibold py-3 px-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200'>
                      Search Battle History
                    </button>
                  </div>
                </div>
              </div>
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

export default Home;
