'use client';

import { useState } from 'react';

const RESTAURANTS = [
  {
    id: 1,
    name: 'Lung King Heen',
    cuisine: 'Cantonese',
    location: 'Four Seasons Hotel, Central',
    michelin: 3,
    priceRange: '$$$$',
    description: 'First Chinese restaurant to receive three Michelin stars. Renowned for exquisite dim sum and seafood.',
    highlights: ['Dim Sum', 'Seafood', 'Harbor Views']
  },
  {
    id: 2,
    name: 'Amber',
    cuisine: 'French Contemporary',
    location: 'The Landmark Mandarin Oriental, Central',
    michelin: 2,
    priceRange: '$$$$',
    description: 'Sophisticated French cuisine with innovative techniques and exceptional wine pairings.',
    highlights: ['Modern French', 'Wine Selection', 'Elegant Ambiance']
  },
  {
    id: 3,
    name: 'Tim Ho Wan',
    cuisine: 'Dim Sum',
    location: 'Multiple Locations',
    michelin: 1,
    priceRange: '$',
    description: 'World\'s cheapest Michelin-starred restaurant, famous for BBQ pork buns.',
    highlights: ['BBQ Pork Buns', 'Affordable', 'Casual']
  },
  {
    id: 4,
    name: 'The Chairman',
    cuisine: 'Cantonese',
    location: 'Kau U Fong, Central',
    michelin: 1,
    priceRange: '$$',
    description: 'Farm-to-table Cantonese cuisine using locally sourced ingredients.',
    highlights: ['Local Ingredients', 'Traditional', 'Authentic Flavors']
  },
  {
    id: 5,
    name: 'Sushi Shikon',
    cuisine: 'Japanese Sushi',
    location: 'Sheung Wan',
    michelin: 3,
    priceRange: '$$$$',
    description: 'Intimate omakase experience with the finest Japanese ingredients.',
    highlights: ['Omakase', 'Traditional Edomae', 'Intimate Setting']
  },
  {
    id: 6,
    name: 'Caprice',
    cuisine: 'French',
    location: 'Four Seasons Hotel, Central',
    michelin: 3,
    priceRange: '$$$$',
    description: 'Classic French haute cuisine with panoramic harbor views.',
    highlights: ['Haute Cuisine', 'Harbor Views', 'Extensive Wine Cellar']
  },
  {
    id: 7,
    name: 'Yat Lok',
    cuisine: 'Cantonese Roast',
    location: 'Central',
    michelin: 1,
    priceRange: '$',
    description: 'Famous for crispy roast goose with perfectly rendered skin.',
    highlights: ['Roast Goose', 'Street Food Style', 'Local Favorite']
  },
  {
    id: 8,
    name: 'Duddell\'s',
    cuisine: 'Cantonese',
    location: 'Central',
    michelin: 1,
    priceRange: '$$$',
    description: 'Contemporary Cantonese cuisine in an art-filled space.',
    highlights: ['Art Gallery', 'Dim Sum', 'Stylish Interior']
  },
  {
    id: 9,
    name: 'Ta Vie',
    cuisine: 'French-Chinese Fusion',
    location: 'Central',
    michelin: 2,
    priceRange: '$$$$',
    description: 'Innovative East-meets-West cuisine with stunning presentations.',
    highlights: ['Fusion', 'Creative', 'Mountain Views']
  },
  {
    id: 10,
    name: 'Ho Lee Fook',
    cuisine: 'Modern Cantonese',
    location: 'Soho, Central',
    michelin: 0,
    priceRange: '$$',
    description: 'Hip and trendy Chinese restaurant with creative cocktails.',
    highlights: ['Modern Twist', 'Nightlife', 'Innovative Dishes']
  }
];

export default function Home() {
  const [filterCuisine, setFilterCuisine] = useState('All');
  const [filterMichelin, setFilterMichelin] = useState('All');
  const [filterPrice, setFilterPrice] = useState('All');

  const cuisines = ['All', ...new Set(RESTAURANTS.map(r => r.cuisine))];
  const michelinStars = ['All', '3', '2', '1', '0'];
  const priceRanges = ['All', '$', '$$', '$$$', '$$$$'];

  const filteredRestaurants = RESTAURANTS.filter(r => {
    if (filterCuisine !== 'All' && r.cuisine !== filterCuisine) return false;
    if (filterMichelin !== 'All' && r.michelin.toString() !== filterMichelin) return false;
    if (filterPrice !== 'All' && r.priceRange !== filterPrice) return false;
    return true;
  });

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '3rem 2rem',
        textAlign: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ margin: '0 0 1rem 0', fontSize: '3rem', fontWeight: 'bold' }}>
          🍽️ Best Restaurants in Hong Kong
        </h1>
        <p style={{ margin: 0, fontSize: '1.2rem', opacity: 0.9 }}>
          Discover the finest dining experiences from Michelin-starred establishments to local favorites
        </p>
      </header>

      {/* Filters */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem',
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          marginBottom: '2rem',
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ flex: '1', minWidth: '200px' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
              Cuisine Type
            </label>
            <select
              value={filterCuisine}
              onChange={(e) => setFilterCuisine(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '8px',
                border: '2px solid #e0e0e0',
                fontSize: '1rem',
                cursor: 'pointer'
              }}
            >
              {cuisines.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div style={{ flex: '1', minWidth: '200px' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
              Michelin Stars
            </label>
            <select
              value={filterMichelin}
              onChange={(e) => setFilterMichelin(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '8px',
                border: '2px solid #e0e0e0',
                fontSize: '1rem',
                cursor: 'pointer'
              }}
            >
              {michelinStars.map(s => (
                <option key={s} value={s}>
                  {s === 'All' ? 'All' : s === '0' ? 'No Stars' : `${s} Star${s !== '1' ? 's' : ''}`}
                </option>
              ))}
            </select>
          </div>

          <div style={{ flex: '1', minWidth: '200px' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
              Price Range
            </label>
            <select
              value={filterPrice}
              onChange={(e) => setFilterPrice(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '8px',
                border: '2px solid #e0e0e0',
                fontSize: '1rem',
                cursor: 'pointer'
              }}
            >
              {priceRanges.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          Showing {filteredRestaurants.length} restaurant{filteredRestaurants.length !== 1 ? 's' : ''}
        </p>

        {/* Restaurant Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {filteredRestaurants.map(restaurant => (
            <div
              key={restaurant.id}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                <h2 style={{ margin: 0, color: '#333', fontSize: '1.5rem' }}>
                  {restaurant.name}
                </h2>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#667eea' }}>
                  {restaurant.priceRange}
                </span>
              </div>

              <div style={{ marginBottom: '0.75rem' }}>
                <span style={{
                  display: 'inline-block',
                  backgroundColor: '#667eea',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold'
                }}>
                  {restaurant.cuisine}
                </span>
                {restaurant.michelin > 0 && (
                  <span style={{
                    display: 'inline-block',
                    marginLeft: '0.5rem',
                    color: '#FFD700',
                    fontSize: '1.2rem'
                  }}>
                    {'⭐'.repeat(restaurant.michelin)}
                  </span>
                )}
              </div>

              <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                📍 {restaurant.location}
              </p>

              <p style={{ color: '#444', lineHeight: '1.6', marginBottom: '1rem' }}>
                {restaurant.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {restaurant.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    style={{
                      backgroundColor: '#f0f0f0',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '12px',
                      fontSize: '0.85rem',
                      color: '#555'
                    }}
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredRestaurants.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '3rem',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <p style={{ fontSize: '1.2rem', color: '#666' }}>
              No restaurants match your filters. Try adjusting your selection.
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        color: '#666',
        marginTop: '3rem'
      }}>
        <p>🇭🇰 Discover the best dining experiences Hong Kong has to offer</p>
      </footer>
    </div>
  );
}
