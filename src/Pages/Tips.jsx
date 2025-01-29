import img1 from '../assets/tips1.jpg'
import img2 from '../assets/tips2.jpg'
import img3 from '../assets/tips3.jpg'
import img4 from '../assets/tips4.jpg'

export const Tips = () => {
  return (
    <div className='py-8 my-2.5' id='tours'>
      <div className='text-center mb-16'>
        <h1 className='text-4xl font-bold mb-6'>Turlar</h1>
        <p className='text-xl text-gray-600'>Eng yaxshi sayohat turlari</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        <div>
          <div>
            <img src={img1} alt="o'zbekiston" />
          </div>
          <div className='p-4'>
            <h1>O'zbekiston bo'ylab sayohat</h1>
            <p>O'zbekistonning tarixiy va madaniy shaharlari bo'ylab safar</p>
            <button>Batafsil</button>
          </div>
        </div>
      </div>
    </div>
  )
}
