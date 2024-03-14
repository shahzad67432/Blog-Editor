import parse from 'html-react-parser';

export const InputsBox = () => {
      const htmlContent = '<h2> Quill </h2>';

      return (
          <div>
              {parse(htmlContent)}
          </div>
      );
};
