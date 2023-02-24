import classNames from 'classnames';

const Container = ({ children, className }) => {
  return (
    <div className={classNames('max-w-[120rem] px-4 md:px-0 mx-auto', className)}>
      {children}
    </div>
  );
};
export default Container;
