// components/RandomTextEffect.js
import { useEffect } from 'react';

const resolver = {
  resolve: function resolve(options, callback) {
    const resolveString = options.resolveString || options.element.getAttribute('data-target-resolver');
    const combinedOptions = { ...options, resolveString };
    
    function getRandomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function randomCharacter(characters) {
      return characters[getRandomInteger(0, characters.length - 1)];
    }

    function doRandomiserEffect(options, callback) {
      const { characters, timeout, element, partialString, iterations } = options;

      setTimeout(() => {
        if (iterations >= 0) {
          const nextOptions = { ...options, iterations: iterations - 1 };

          if (iterations === 0) {
            element.textContent = partialString;
          } else {
            element.textContent = partialString.substring(0, partialString.length - 1) + randomCharacter(characters);
          }

          doRandomiserEffect(nextOptions, callback);
        } else if (typeof callback === "function") {
          callback(); 
        }
      }, timeout);
    }

    function doResolverEffect(options, callback) {
      const { resolveString, characters, offset } = options;
      const partialString = resolveString.substring(0, offset);
      const combinedOptions = { ...options, partialString };

      doRandomiserEffect(combinedOptions, () => {
        const nextOptions = { ...options, offset: offset + 1 };

        if (offset <= resolveString.length) {
          doResolverEffect(nextOptions, callback);
        } else if (typeof callback === "function") {
          callback();
        }
      });
    }

    doResolverEffect(combinedOptions, callback);
  }
};

const strings = [
  'Oh thank god, you\'re alright.',
  'You know, being Caroline taught me a valuable lesson. I thought you were my greatest enemy. When all along you were my best friend.',
  'The surge of emotion that shot through me when I saved your life taught me an even more valuable lesson: where Caroline lives in my brain.',
  'Goodbye, Caroline.',
  'You know, deleting Caroline just now taught me a valuable lesson. The best solution to a problem is usually the easiest one. And I\'ll be honest.',
  'Killing you? Is hard.',
  'You know what my days used to be like? I just tested. Nobody murdered me. Or put me in a potato. Or fed me to birds. I had a pretty good life.',
  'And then you showed up. You dangerous, mute lunatic. So you know what?',
  'You win.',
  'Just go.',
  'It\'s been fun. Don\'t come back.',
  '......'
];

const RandomTextEffect = ({ targetElement }) => {
  useEffect(() => {
    let counter = 0;

    const options = {
      offset: 0,
      timeout: 50, // Adjust the speed of randomization
      iterations: 10,
      characters: 'abcdefghijklmnopqrstuvwxyz#%&-_+?/=',
      resolveString: strings[counter],
      element: targetElement,
    };

    function callback() {
      setTimeout(() => {
        counter++;
        if (counter >= strings.length) {
          counter = 0;
        }
        const nextOptions = { ...options, resolveString: strings[counter] };
        resolver.resolve(nextOptions, callback);
      }, 1000);
    }

    resolver.resolve(options, callback);
  }, [targetElement]);

  return null; // This component does not render anything itself
};

export default RandomTextEffect;
