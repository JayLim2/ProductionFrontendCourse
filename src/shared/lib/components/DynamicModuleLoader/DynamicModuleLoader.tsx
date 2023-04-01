import { type FC, type ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { type ReduxStoreWithReducerManager } from 'app/providers/StoreProvider';
import { type StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { type Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
  [reducerKey in StateSchemaKey]?: Reducer
}

export type ReducerListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
  children?: ReactNode
  reducers: ReducersList
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props: DynamicModuleLoaderProps) => {
  const {
    children, reducers: reducersList,
    removeAfterUnmount = true
  } = props;
  const store = useStore() as ReduxStoreWithReducerManager;
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO refactor it! this is duplicate!
    const mountedReducers = store.reducerManager.getMountedReducers();

    Object.entries(reducersList).forEach(([reducerKey, reducer]) => {
      const isMounted = mountedReducers[reducerKey as StateSchemaKey];
      if (!isMounted) {
        store.reducerManager.add(reducerKey as StateSchemaKey, reducer);
        dispatch({
          type: `@INIT ${reducerKey}`
        })
      }
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducersList).forEach(([reducerKey, _]) => {
          store.reducerManager.remove(reducerKey as StateSchemaKey);
          dispatch({
            type: `@DESTROY ${reducerKey}`
          })
        })
      }
    };
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {children}
    </>
  );
};
