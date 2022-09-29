import './App.css'
import './Global.css'
import { Header } from './components/Header'
import { useEffect, useRef, useState } from 'react'
import { Footer } from './components/Footer'
import { MdChevronLeft, MdChevronRight} from 'react-icons/md'
import {motion} from 'framer-motion'


function App() {
  const [listProducts, setListProducts] = useState([
    {
      type:'arranjos',
      name: 'arranjo 1',
      imageURL: 'https://images.unsplash.com/photo-1612387426692-79b7c411d537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      price: 200
    },
    {
      type:'arranjos',
      name: 'arranjo 2',
      imageURL: 'https://images.unsplash.com/photo-1612387426692-79b7c411d537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      price: 200
    },
    {
      type:'arranjos',
      name: 'arranjo 3',
      imageURL: 'https://images.unsplash.com/photo-1612387426692-79b7c411d537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      price: 200
    },
    {
      type:'arranjos',
      name: 'arranjo 4',
      imageURL: 'https://images.unsplash.com/photo-1612387426692-79b7c411d537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      price: 200
    },
    {
      type:'arranjos',
      name: 'arranjo 5',
      imageURL: 'https://images.unsplash.com/photo-1612387426692-79b7c411d537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      price: 200
    },
    {
      type:'arranjos',
      name: 'arranjo 6',
      imageURL: 'https://images.unsplash.com/photo-1612387426692-79b7c411d537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      price: 200
    },
    {
      type:'arranjos',
      name: 'arranjo 7',
      imageURL: 'https://images.unsplash.com/photo-1612387426692-79b7c411d537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      price: 200
    },
    {
      type:'arranjos',
      name: 'arranjo ',
      imageURL: 'https://images.unsplash.com/photo-1612387426692-79b7c411d537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      price: 200
    },
    {
      type:'cestas',
      name: 'cesta 1',
      imageURL: '',
      price: 200
    },
    {
      type:'buques',
      name: 'buque 1',
      imageURL: 'https://images.unsplash.com/photo-1619878079079-833bd76cf0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      price: 200
    },
    {
      type:'buques',
      name: 'buque 2',
      imageURL: 'https://images.unsplash.com/photo-1619878079079-833bd76cf0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      price: 200
    },
    {
      type:'buques',
      name: 'buque 3',
      imageURL: 'https://images.unsplash.com/photo-1619878079079-833bd76cf0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      price: 200
    },
    {
      type:'buques',
      name: 'buque 4',
      imageURL: 'https://images.unsplash.com/photo-1619878079079-833bd76cf0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      price: 200
    },
    ])

  const [toogle, setToogle] = useState(false)

  function handleToogle(){
    if(toogle){
      setToogle(false)
      document.getElementById('mdLeft').classList.add('hidden')
      document.getElementById('mdRight').classList.add('hidden')
      
    } else{
      setToogle(true)
      document.getElementById('mdLeft').classList.remove('hidden')
      document.getElementById('mdRight').classList.remove('hidden')
    }
  }

  const [typeProduct, setTypeProduct] = useState('')

  function handleTypeProduct(arg=''){
    if(arg == 'arranjos'){
      setTypeProduct('arranjos')
    }else if(arg == 'buques'){
      setTypeProduct('buques')
    }else if(arg == 'cestas'){
      setTypeProduct('cestas')
    }
  } 

  const [width, setWidth] = useState(0)

  const carousel = useRef()

  useEffect(() => {
    setWidth(carousel.current.scrollWidth)
  },[])

  return (
    <div className='bg-gray-900 relative'>
      <Header />

      <div id="products" className="mx-2 grid grid-cols-3 gap-2 justify-around mt-6">
        <div className="items-center bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1612387426692-79b7c411d537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80')] h-25rem]">
            <div className="flex flex-col justify-end items-center w-full h-full">
                <p className="font-bold text-3xl text-white">Arranjos</p>
                <button onClick={() => {handleToogle();handleTypeProduct('arranjos')}} className="text-white p-3 bg-black/75 rounded-xl my-2 hover:bg-white/75 transition-all delay-75 hover:scale-105">Ver Produtos</button>
            </div>
        </div>
        <div className="bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1619878079079-833bd76cf0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80')] h-[25rem]">
            <div className="flex flex-col justify-end items-center w-full h-full">
            <p className="font-bold text-3xl text-white">Buques</p>
            <button onClick={() => {handleToogle();handleTypeProduct('buques')}} className="text-white p-3 bg-black/75 rounded-xl my-2 hover:bg-white/75 transition-all delay-75 hover:scale-105">Ver Produtos</button>
            </div>
        </div>
        <div className="  bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1588656699187-85ea028553d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80')] h-[25rem]">
            <div className="flex flex-col justify-end items-center w-full h-full">
            <p className="font-bold text-3xl text-white">Cestas</p>
            <button onClick={() => {handleToogle();handleTypeProduct('cestas');removehidden()}} className=" text-white p-3 bg-black/75 rounded-xl my-2 hover:bg-white/75 transition-all delay-75 hover:scale-105">Ver Produtos</button>
            </div>
        </div>
      </div>

        {/* <div className='mt-3 relative flex items-center '>
          <MdChevronLeft onClick={slideLeft} id='mdLeft' size={40} className='hidden absolute text-white cursor-pointer' />
          <div id="slider" className='w-full h-full overflow-x-hidden whitespace-nowrap scroll scroll-smooth'>
          {listProducts.map(products =>{
            if(toogle==true){
              if (products.type == typeProduct){
                return(
                    <div className={`bg-cover bg-[url('${products.imageURL.toString()}')] bg-center m-2 inline-flex flex-col items-center justify-end text-white w-[20rem] h-[20rem] ease-in-out duration-300`} >
                      <strong>{products.name}</strong>
                      <p>{products.price}</p>
                    </div>
                  
                )
              }
            }
          })} 
          </div>
          <MdChevronRight onClick={slideRight} id='mdRight' size={40} className='hidden absolute text-white right-0 cursor-pointer' />
          </div> */}

        <motion.div ref={carousel} className='cursor-grab overflow-hidden'>
          <MdChevronLeft id='mdLeft' size={40} className='hidden absolute text-white cursor-pointer' />
          <motion.div drag='x' dragConstraints={{ right:0, left: -width }} className='flex gap-2'>
            {listProducts.map(product => {
              if(toogle==true){
                if(product.type == typeProduct){
                  return(
                    <motion.div className={`p-2 mt-2 flex flex-col justify-end items-center bg-cover bg-[url('${product.imageURL.toString()}')] bg-center min-w-[21rem] h-[20rem] `}>
                      <motion.strong className='text-white'>{product.name}</motion.strong>
                      <motion.p className='text-white'>R$ {product.price}</motion.p>
                      <button className='mt-2 p-4 rounded-md bg-orange-300'>Encomendar</button>
                    </motion.div>
                  )
                }
              }
            })}
          </motion.div>
          <MdChevronRight id='mdRight' size={40} className='hidden absolute text-white right-0 cursor-pointer' />
        </motion.div>
        
          
      

      <Footer />
    </div>
    
  )
}

export default App
