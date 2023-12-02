import { useState } from 'react';

function useForm() {
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return {
    data,
    handleInputChange,
  };
};

export default useForm;