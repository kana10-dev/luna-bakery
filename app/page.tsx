export default function Home() {
  return (
    <div className="">
      <header id="header" className="w-full h-screen bg-cover bg-center bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/mainvisual.jpg')] text-[#fff] flex px-20 pt-20 justify-between">
        <p className="text-[30px]"><a className="block" href="#">Boulagerie Luna</a></p>
        <nav>
          <ul className="flex text-[16px] gap-[30px]">
            <li className="hover:opacity-70"><a className="block" href="#concept">CONCEPT</a></li>
            <li className="hover:opacity-70"><a className="block" href="#menu">MENU</a></li>
            <li className="hover:opacity-70"><a className="block" href="#access">ACCESS</a></li>
            <li className="hover:opacity-70"><a className="block" href="#contact">CONTACT</a></li>
            <li className="hover:opacity-70"><a className="block" href="https://instagram.com"><img className="w-[24px] h-[24px]" src="/instagram.png" alt="" /></a></li>
          </ul>
        </nav>
      </header>
      <h1 className="text-center text-[36px] font-bold my-20">- キャッチコピー -</h1>
      <section className="mb-20" id="concept">
        <div className="text-center mb-7">
          <h2 className="inline-block text-[24px] font-bold relative after:content-[''] after:absolute after:bottom-[-8px] after:left-[10%] after:w-[80%] after:h-[2px] after:bg-[#121212]">CONCEPT</h2>
        </div>
        <div className="flex mx-20 justify-between">
          <img className="w-[48%]" src="/concept.jpg" alt="" />
          <div className="w-[48%]">
            <p className="text-[20px] font-bold mb-7">紹介文</p>
            <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
        </div>
      </section>
      <section className="px-20 mb-20" id="menu">
        <div className="text-center mb-20">
          <h2 className="inline-block text-[24px] font-bold relative after:content-[''] after:absolute after:bottom-[-8px] after:left-[10%] after:w-[80%] after:h-[2px] after:bg-[#121212] mb-7">MENU</h2>
          <h3 className="text-[24px] font-bold">オススメのパン紹介</h3>
          <img className="w-[800px] mx-auto" src="/menu.jpg" alt="" />
        </div>
        <div className="flex justify-between mb-7">
          <img className="w-[48%]" src="/menu-1.jpg" alt="" />
          <div className="w-[48%] text-center">
            <p className="font-bold text-[20px]">テキスト</p>
            <p>テキストテキストテキスト</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[48%] text-center">
            <p className="font-bold text-[20px]">テキスト</p>
            <p>テキストテキストテキスト</p>
          </div>
          <img className="w-[48%]" src="/menu-2.jpg" alt="" />
        </div>
      </section>
      <section className="text-center mb-20 px-20" id="access">
        <h2 className="inline-block text-[24px] font-bold relative after:content-[''] after:absolute after:bottom-[-8px] after:left-[10%] after:w-[80%] after:h-[2px] after:bg-[#121212] mb-7">ACCESS</h2>
        <div className="flex justify-between items-start">
          <iframe className="w-[48%]" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3311.497930952884!2d139.70169953726332!3d35.65053654858215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp!4v1773541782625!5m2!1sja!2sjp" width="600" height="450" loading="lazy"></iframe>
          <dl className="w-[48%] flex flex-wrap text-left">
            <dt className="w-[30%] border-t-1 border-b-1 border-[#ccc]">住所</dt>
            <dd className="w-[70%] border-t-1 border-b-1 border-[#ccc]">XX-XX-XX</dd>
            <dt className="w-[30%] border-b-1 border-[#ccc]">営業時間</dt>
            <dd className="w-[70%] border-b-1 border-[#ccc]">XX:XX ~ XX:XX</dd>
            <dt className="w-[30%] border-b-1 border-[#ccc]">定休日</dt>
            <dd className="w-[70%] border-b-1 border-[#ccc]">XXXXXX</dd>
          </dl>
        </div>
      </section>
      <section className="text-center mb-20 px-20" id="contact">
        <h2 className="inline-block text-[24px] font-bold relative after:content-[''] after:absolute after:bottom-[-8px] after:left-[10%] after:w-[80%] after:h-[2px] after:bg-[#121212] mb-7">CONTACT</h2>
        <form className="grid grid-cols-1 gap-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-900">お名前</label>
            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 bg-gray-50 border" placeholder="山田 太郎" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900">メールアドレス</label>
            <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 bg-gray-50 border" placeholder="example@mail.com" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900">内容</label>
            <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 bg-gray-50 border" placeholder="お問い合わせ内容を入力してください"></textarea>
          </div>

          <button type="submit" className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-stone-800 hover:bg-stone-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500 transition-colors">
            送信する
          </button>
        </form>
      </section>
      <footer className="bg-[#292929] text-[#fff] p-20 flex justify-between" id="footer">
        <ul className="flex gap-5">
          <li><a className="hover:opacity-70" href="#header">TOP</a></li>
          <li><a className="hover:opacity-70" href="#concept">CONCEPT</a></li>
          <li><a className="hover:opacity-70" href="#menu">MENU</a></li>
          <li><a className="hover:opacity-70" href="#access">ACCESS</a></li>
          <li><a className="hover:opacity-70" href="#contact">CONTACT</a></li>
          <li><a className="hover:opacity-70" href="https://instagram.com"><img className="w-[24px] h-[24px]" src="/instagram.png" alt="" /></a></li>
        </ul>
        <p className="text-center">&copy; Boulangurie Luna</p>
      </footer>
    </div>
  );
}
