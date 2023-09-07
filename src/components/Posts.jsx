import React from 'react'

function Posts({ inicio, fin, lista, color, section, clase }) {

  return (
    <>
      <h2 className='bg-slate-500 text-white my-3 p-3 block text-center w-full text-2xl'>Section {section}</h2>
      <section className="grid grid-cols-3 mb-5 container">
        {
          lista.slice(inicio, fin).map((item, index) => (
            <div className={`${color} m-2 rounded-lg px-4 py-3 text-white card ${clase}`} key={index} id={item.userId}>
              <div className='flex items-center mb-3'>
                <img src={`https://robohash.org/persona${item.id}`} loading='lazy' alt="" className='w-28 bg-white rounded-full mr-5' />
                <div className='flex flex-col'>
                  <h2 className='font-bold capitalize'>{item.title.split(" ").slice(0, 4).join(" ")}</h2>
                  <h4>{item.body.split(" ").slice(0, 3).join(" ")}</h4>
                </div>
              </div>
              <p>{item.body}</p>
            </div>
          ))
        }
      </section>
    </>
  )
}

export default Posts