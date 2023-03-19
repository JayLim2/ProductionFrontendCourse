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
    Object.entries(reducersList).forEach(([reducerKey, reducer]: ReducerListEntry) => {
      store.reducerManager.add(reducerKey, reducer);
      dispatch({
        type: `@INIT ${reducerKey}`
      })
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducersList).forEach(([reducerKey, _]: ReducerListEntry) => {
          store.reducerManager.remove(reducerKey);
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
