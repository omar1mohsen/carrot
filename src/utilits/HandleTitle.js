export default function handleTitle  (str, strLgth = 20)  {
    const truncStr = str.substring(0, strLgth);
    return str.length > strLgth ? `${truncStr}...` : str;
  };
