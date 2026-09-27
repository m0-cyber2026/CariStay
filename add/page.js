export default function Home() {
  return (
    <main>
      <h1>CariStay</h1>
      <p>Cari hotel. Compare harga. Stay lebih berbaloi.</p>

      <div>
        <input
          type="text"
          placeholder="Where do you want to stay?"
        />

        <input type="date" />

        <input type="date" />

        <select>
          <option>1 Room, 2 Guests</option>
          <option>1 Room, 1 Guest</option>
          <option>1 Room, 3 Guests</option>
          <option>2 Rooms, 4 Guests</option>
        </select>

        <button>Search Hotels</button>
      </div>
    </main>
  );
}