import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [good, setGood] = useState('Jam');

  const handleSelect = selectedGood => {
    setGood(prevGood => (prevGood === selectedGood ? null : selectedGood));
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {good ? `${good} is selected` : 'No goods selected'}
        {good && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => handleSelect('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(item => (
            <tr
              data-cy="Good"
              key={item}
              className={cn({ 'has-background-success-light': item === good })}
              onClick={() => handleSelect(item)}
            >
              <td>
                <button
                  data-cy={item === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={`button ${item === good && 'is-info'}`}
                >
                  {item === good ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {item}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
