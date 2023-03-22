import { type TypedDispatch } from 'app/providers/StoreProvider';
import { useDispatch } from 'react-redux';

export const useTypedDispatch = (): TypedDispatch => useDispatch<TypedDispatch>();

// TODO figure out how it works
// export const useTypedDispatch: () => TypedDispatch = useDispatch
