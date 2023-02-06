import { useState } from 'react';
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx'
import { RiCheckboxBlankCircleFill } from 'react-icons/ri'

const remChats = ['rem-001', 'rem-002'];
const rezeChats = ['reze-001', 'reze-002', 'reze-003'];
const aquaChats = ['aqua-001', 'aqua-002'];

function handleInputChange(e) {
  this.setState({
      [e.target.name]: e.target.value
  });
};

const Settings = ({open,setOpen,connected,setConnected}) => {
  return (
    <div>
      <div className="bg-gray-300 dark:bg-gray-900 left-auto text-gray-400 hover:text-blue-600 flex">
        <ul>
          <li className="float-left"><RxHamburgerMenu onClick={() => { setOpen(!open); }} className="relative flex pb-4 pt-4 cursor-pointer text-gray-400 hover:text-blue-600" size="64" /></li>
          <li className="float-left pt-4"><RiCheckboxBlankCircleFill className={` ${connected ? "text-green-500" : "text-red-500"} visible`} size="32" /></li>
          <ConnectedStatus text={`${connected ? "Connected to Kobold" : "No connection.."}`} />
        </ul>
      </div>
      <div className={` ${open ? "visible" : "invisible"} channel-bar`}>
        <div>
          <HeaderBlock text="Characters" />
          <p className="cursor-pointer settings-gtext">+Import Character</p>
          <div className='channel-container'>
            <Dropdown header='Rem' selections={remChats} />
            <Dropdown header='Reze' selections={rezeChats} />
            <Dropdown header='Aqua' selections={aquaChats} />
          </div>
        </div>
        <HeaderBlock id="SettingsHeader" text="Settings" />
        <div>
          <p className="settings-gtext">Kobold API URL</p>
          <div className="ml-4 mr-4 pb-2">
            <input className="text-gray-600 dark:text-gray-400  border-gray-600 bg-gray-300 dark:bg-gray-900 border shadow-sm w-full" placeholder="https://kobold.example.com/api" type="text" ></input>
          </div>
        </div>
        <div>
          <p className="settings-gtext">Model</p>
          <div className="relative ml-4 mr-4">
            <select className="settings-selector">
              <option>Pygmalion 6B</option>
              <option>Pygmalion 2.7B</option>
              <option>Pygmalion 1.3B</option>
            </select>
          </div>
        </div>
        <div>
          <p className="settings-input-label pl-4">Model Preset</p>
          <div className="relative ml-4 mr-4">
            <select className="settings-selector">
              <option>Calibrated Pygmalion 6B</option>
              <option>Classic Pygmalion 6B</option>
              <option>Classic Pygmalion 2.7B</option>
            </select>
          </div>
        </div>
        <div className="px-4">
          <ul>
            <li className="float-left"><p className="settings-input-label">Max New Tokens</p></li>
            <li className="float-right pt-4"><input type="number" min="16" max="512" placeholder="180" className="settings-input"></input></li>
          </ul>
          <input id="minmax-range" type="range" min="16" max="512" placeholder="180" className="settings-input-range"></input>

          <ul>
            <li className="float-left"><p className="settings-input-label">Temperature</p></li>
            <li className="float-right pt-4"><input type="number" min="0.1" max="2" placeholder="0.5" step="0.01" className="settings-input"></input></li>
          </ul>
          <input id="minmax-range" type="range" min="0.1" max="2" placeholder="0.5" step="0.01" className="settings-input-range"></input>

          <ul>
            <li className="float-left"><p className="settings-input-label">Top P</p></li>
            <li className="float-right pt-4"><input type="number" min="0.1" max="1" placeholder="0.9" step="0.01" className="settings-input"></input></li>
          </ul>
          <input id="minmax-range" type="range" min="0.1" max="1" placeholder="0.9" step="0.01" className="settings-input-range"></input>

            <ul>
              <li className="float-left"><p className="settings-input-label">Typical P</p></li>
              <li className="float-right pt-4"><input type="number" min="0.1" max="1" placeholder="1" step="0.01" className="settings-input"></input></li>
            </ul>
            <input id="minmax-range" type="range" min="0.1" max="1" placeholder="1" step="0.01" className="settings-input-range"></input>

          <ul>
            <li className="float-left"><p className="settings-input-label">Repetition Penalty</p></li>
            <li className="float-right pt-4"><input type="number" min="1" max="3" placeholder="1.05" step="0.01" className="settings-input"></input></li>
          </ul>
          <input id="minmax-range" type="range" min="1" max="3" placeholder="1.05" step="0.01" className="settings-input-range"></input>

          <ul>
            <li className="float-left"><p className="settings-input-label">Top K</p></li>
            <li className="float-right pt-4"><input type="number" min="0" max="100" placeholder="0" className="settings-input"></input></li>
          </ul>
          <input id="minmax-range" type="range" min="0" max="100" placeholder="0" className="settings-input-range"></input>

          <ul className="pb-4">
            <li className="float-left"><p className="settings-input-label">Penalty Alpha</p></li>
            <li className="float-right pt-4"><input type="number" min="0" max="1" placeholder="0.6" step="0.05" className="settings-input"></input></li>
          </ul>
          <input id="minmax-range" type="range" min="0" max="1" placeholder="0.6" step="0.05" className="settings-input-range"></input>
        </div>
      </div>

    </div>
  );
};

const ConnectedStatus = ({text}) => {
  return(
    <li className=" float-left pt-5"><p className="cursor-pointer settings-gtext">{text}</p></li>
  );
};

const Dropdown = ({ header, selections }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className='dropdown'>
      <div onClick={() => setExpanded(!expanded)} className='dropdown-header'>
        <ChevronIcon expanded={expanded} />
        <h5
          className={expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'}
        >
          {header}
        </h5>
        <FaPlus size='12' className='text-accent text-opacity-80 my-auto ml-auto' />
      </div>
      {expanded &&
        selections &&
        selections.map((selection) => <TopicSelection selection={selection} />)}
    </div>
  );
};

const ChevronIcon = ({ expanded }) => {
  const chevClass = 'text-accent text-opacity-80 my-auto mr-1';
  return expanded ? (
    <FaChevronDown size='14' className={chevClass} />
  ) : (
    <FaChevronRight size='14' className={chevClass} />
  );
};

const TopicSelection = ({ selection }) => (
  <div className='dropdown-selection'>
    <BsHash size='24' className='text-gray-400' />
    <h5 className='dropdown-selection-text'>{selection}</h5>
  </div>
);

const HeaderBlock = ({ text }) => (
  <div className='channel-block'>
    <h5 className='channel-block-text'>{text}</h5>
  </div>
);

export default Settings;