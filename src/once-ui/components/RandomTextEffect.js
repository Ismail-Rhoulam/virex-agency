// components/RandomTextEffect.js
import { useEffect, useRef } from 'react';

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

const RandomTextEffect = ({ text, iterations = 10, timeout = 50 }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const options = {
      offset: 0,
      timeout,
      iterations,
      characters: 'abcdefghijklmnopqrstuvwxyz#%&-_+?/=',
      resolveString: text,
      element: textRef.current,
    };

    function callback() {
      setTimeout(() => {
        resolver.resolve({ ...options, resolveString: text }, callback);
      }, 1000); // Delay before starting over
    }

    resolver.resolve(options, callback);
  }, [text, iterations, timeout]);

  return <span ref={textRef}>{text}</span>; // This will display the text
};

export default RandomTextEffect;
