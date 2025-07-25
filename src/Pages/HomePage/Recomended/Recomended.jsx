import { useEffect, useState } from 'react';
import RecoCardBox from './RecoCardBox';

const Recomended = () => {
  const [recoItem, setRecoItem] = useState([]);

  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(item => item.category === 'salad');
        setRecoItem(filtered);
      });
  }, []);

  return (
    <div className="w-11/12 max-w-6xl mx-auto my-20">
      <h2 className="text-3xl font-bold text-center mb-10">Recommended Items</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 grid-cols-2">
        {recoItem.map(item => (
          <RecoCardBox key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Recomended;
