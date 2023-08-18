import {Card} from '../components';
import { useTitle } from '../hooks/useTitle';

export const Home = ({ items, title }) => {

  useTitle(title);

  return (
    <main className='max-w-screen-xl min-h-screen mx-auto'>
      <div className='flex flex-wrap justify-around xl:justify-between items-between gap-6 py-10'>
        {items.map((item) => <Card key={item.id} item={item} />)}
      </div>
    </main>
  )
}
