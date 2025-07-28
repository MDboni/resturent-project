import { useState } from 'react';
import useMenu from '../../../Hooks/useMenu';
import TabBox from './TabBox';


function TabsExample() {
  const [activeTab, setActiveTab] = useState('dessert');

  const [menu] = useMenu();
  const offered = menu.filter(item => item.category === 'offered');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const drinks = menu.filter(item => item.category === 'drinks');
  const dessert = menu.filter(item => item.category === 'dessert');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-full max-w-5xl text-center">
        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => handleTabClick('dessert')}
            className={`px-4 py-2 rounded ${
              activeTab === 'dessert' ? 'border-b-2 border-blue-500 text-blue-600' : 'border border-gray-300'
            }`}
          >
            Dessert
          </button>
          <button
            onClick={() => handleTabClick('salad')}
            className={`px-4 py-2 rounded ${
              activeTab === 'salad' ? 'border-b-2 border-blue-500 text-blue-600' : 'border border-gray-300'
            }`}
          >
            Salad
          </button>
          <button
            onClick={() => handleTabClick('pizza')}
            className={`px-4 py-2 rounded ${
              activeTab === 'pizza' ? 'border-b-2 border-blue-500 text-blue-600' : 'border border-gray-300'
            }`}
          >
            Pizza
          </button>
          <button
            onClick={() => handleTabClick('drinks')}
            className={`px-4 py-2 rounded ${
              activeTab === 'drinks' ? 'border-b-2 border-blue-500 text-blue-600' : 'border border-gray-300'
            }`}
          >
            Drinks
          </button>
          <button
            onClick={() => handleTabClick('offered')}
            className={`px-4 py-2 rounded ${
              activeTab === 'offered' ? 'border-b-2 border-blue-500 text-blue-600' : 'border border-gray-300'
            }`}
          >
            Offered
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'dessert' && (
           <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
              {dessert.map(item => (
                <TabBox key={item._id} item={item} />
              ))}
            </div>
        )}
        {activeTab === 'salad' && (
           <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
              {offered.map(item => (
                <TabBox key={item._id} item={item} />
              ))}
            </div>
        )}
        {activeTab === 'pizza' && (
           <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
              {salad.map(item => (
                <TabBox key={item._id} item={item} />
              ))}
            </div>
        )}
        {activeTab === 'drinks' && (
           <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
              {pizza.map(item => (
                <TabBox key={item._id} item={item} />
              ))}
            </div>
        )}
        {activeTab === 'offered' && (
           <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
              {drinks.map(item => (
                <TabBox key={item._id} item={item} />
              ))}
            </div>
        )}
      </div>
    </div>
  );
}

export default TabsExample;
