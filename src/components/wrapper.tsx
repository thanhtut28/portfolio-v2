interface Props {
   children: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }) => {
   return <div className="max-w-screen-2xl mx-auto">{children}</div>;
};

export default Wrapper;
