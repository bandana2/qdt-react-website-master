import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];
const Home = () => (

  <div>
    <div style={{ width: 300 }}>

      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...params}
            label="Search input"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    </div>
    <div className="layout">

      <a href="#/embed-object">
        <div className="card">
          <div className="card-header ">Embed Objects</div>
          <div className="card-body"><img className="card-img-top" src="assets/embedded.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">
            Embed any object from your Qvf with just the id
          </div>
          <div className="badges">
            <span className="badge badge-dark">Capability API</span>
          </div>
        </div>
      </a>
      <a href="#/embed-object-multi-app">
        <div className="card">
          <div className="card-header ">Embed Objects from 2 Apps</div>
          <div className="card-body"><img className="card-img-top" src="assets/embedded.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Embed any object from 2 Qvfs with just the id</div>
          <div className="badges">
            <span className="badge badge-dark">Capability API</span>
          </div>
        </div>
      </a>
      <a href="#/session-object">
        <div className="card">
          <div className="card-header ">Create Session Objects</div>
          <div className="card-body"><img className="card-img-top" src="assets/embedded.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Create a session Object with custom definition </div>
          <div className="badges">
            <span className="badge badge-dark">Capability API</span>
          </div>
        </div>
      </a>
      <a href="#/current-selections">
        <div className="card">
          <div className="card-header ">Current Selections Toolbar</div>
          <div className="card-body"><img className="card-img-top" src="assets/currentSelections.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">The Native Qlik Sense Selection Toolbar </div>
          <div className="badges">
            <span className="badge badge-dark">Capability API</span>
          </div>
        </div>
      </a>
      <a href="#/table">
        <div className="card">
          <div className="card-header ">Table</div>
          <div className="card-body"><img className="card-img-top" src="assets/table.png" alt="Table" /></div>
          <div className="card-footer ">Create a table via the Capability API </div>
          <div className="badges">
            <span className="badge badge-dark">Capability API</span>
          </div>
        </div>
      </a>
      <a href="#/table-engine">
        <div className="card">
          <div className="card-header ">Table</div>
          <div className="card-body"><img className="card-img-top" src="assets/table.png" alt="Table" /></div>
          <div className="card-footer ">Create a table via the  Engine API</div>
          <div className="badges">
            <span className="badge badge-dark"> Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/selection-toolbar">
        <div className="card">
          <div className="card-header ">Custom Selections Toolbar</div>
          <div className="card-body"><img className="card-img-top" src="assets/selectionToolbar.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">A Custom Selections Toolbar</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/search">
        <div className="card">
          <div className="card-header ">Search</div>
          <div className="card-body"><img className="card-img-top" src="assets/search.png" alt="Search Fields" /></div>
          <div className="card-footer ">Search any Field or Dimension from your Qvf</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/filters">
        <div className="card">
          <div className="card-header ">Filters</div>
          <div className="card-body"><img className="card-img-top" src="assets/filters.png" alt="Filters" /></div>
          <div className="card-footer ">Create DropDown or Listbox filter from the Engine API</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/kpi">
        <div className="card">
          <div className="card-header ">KPIs</div>
          <div className="card-body"><img className="card-img-top" src="assets/kpis.png" alt="Kpis" /></div>
          <div className="card-footer ">Create KPIs from the Engine API</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/mapbox">
        <div className="card">
          <div className="card-header ">MAPBOX</div>
          <div className="card-body"><img className="card-img-top" src="assets/mapbox.png" alt="mapbox" /></div>
          <div className="card-footer ">Create a Map using Mapbox and Engine API</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/sequencer">
        <div className="card">
          <div className="card-header ">SEQUENCER</div>
          <div className="card-body"><img className="card-img-top" src="assets/sequencer.png" alt="Sequencer" /></div>
          <div className="card-footer ">Loop through a dimension and make selections</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>

      <a href="#/picasso-horizontal-barchart">
        <div className="card">
          <div className="card-header ">Picasso Horizontal Bar Chart</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoHorizontalBarchart.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Custom Horizontal Bar Chart with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/picasso-vertical-barchart">
        <div className="card">
          <div className="card-header ">Picasso Vertical Bar Chart</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoVerticalBarchart.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Custom Vertical Bar Chart with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/picasso-pie-chart">
        <div className="card">
          <div className="card-header ">Picasso Pie Chart</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoPie.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Custom Pie Chart with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/picasso-scatterplot">
        <div className="card">
          <div className="card-header ">Picasso Scatterplot</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoScotterplot.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Scotterplot with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/picasso-scatterplot-with-images">
        <div className="card">
          <div className="card-header ">Picasso Scatterplot - images</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoScotterplotImages.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Scotterplot with custom images,  Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/picasso-line-chart">
        <div className="card">
          <div className="card-header ">Picasso Line Chart</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoLinechart.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Custom Line Chart with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/picasso-multi-line-chart">
        <div className="card">
          <div className="card-header ">Picasso Multi Line Chart</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoMultiLinechart.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Custom Multi Line Chart with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/picasso-combo-line-barchart">
        <div className="card">
          <div className="card-header ">Picasso Combo Line Bar Chart</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoCombochart.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Scotterplot with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/stacked-barchart">
        <div className="card">
          <div className="card-header ">Picasso Stacked Bar Chart</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoStackedBarchart.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Stacked Bar Chart with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/gauge">
        <div className="card">
          <div className="card-header ">Picasso Gauge</div>
          <div className="card-body"><img className="card-img-top" src="assets/gauge.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Gauge with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/picasso-range-area-chart">
        <div className="card">
          <div className="card-header ">Picasso Range Area Chart</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoRangeAreaChart.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Range Area chart with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/picasso-custom-combo-chart">
        <div className="card">
          <div className="card-header ">Picasso Custom Combo Chart</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoCustomChart.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">
            Custom on-the-fly chart with Picasso.js & Enigma.js
            <br />
            Start with a basic like Bar Chart and add as many components as you want.
          </div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/picasso-vertical-group-barchart">
        <div className="card">
          <div className="card-header ">Picasso Vertical Group Bar Chart</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoGroupBarchart.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Vertical Group Bar Chart with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/picasso-custom-vertical-group-barchart">
        <div className="card">
          <div className="card-header ">Picasso Custom Group Bar Chart</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoCustomGroupBarchart.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Custom Vertical Group Bar Chart with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/picasso-gantt">
        <div className="card">
          <div className="card-header ">Picasso Gannt</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoGantt.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Gantt Chart with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/picasso-mekko">
        <div className="card">
          <div className="card-header ">Picasso Mekko</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoMekko.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Mekko Chart with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/picasso-point-distribution">
        <div className="card">
          <div className="card-header ">Picasso Point Distribution</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoPointDistribution.png" alt="Picasso Point Distribution" /></div>
          <div className="card-footer ">Point Distributions Chart with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/picasso-pyramid">
        <div className="card">
          <div className="card-header ">Picasso Pyramid</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoPyramid.png" alt="Picasso Pyramids" /></div>
          <div className="card-footer ">Pyramid Chart with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      {/* <a href="#/picasso-dumbbell">
        <div className="card">
          <div className="card-header ">Picasso Dumbbell plot</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoDumbbell.png" alt="Picasso Dumbbell" /></div>
          <div className="card-footer ">Dumbbell Plot with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a> */}
    </div>

  </div>

);

export default Home;
