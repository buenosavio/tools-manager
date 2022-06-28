import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from '../store'
import { PersistGate } from 'redux-persist/integration/react'
import { Persistor } from 'redux-persist'

export default function withProvider<T>(
  WrapperComponent: React.FC<T>,
  enhancedStore: any = store
): (props: T) => ReactElement {
  const Gate = PersistGate as unknown as React.FC<{ persistor: Persistor }>
  return props => (
    <Provider store={enhancedStore}>
      <Gate persistor={persistor}>
        <WrapperComponent {...props} />
      </Gate>
    </Provider>
  )
}
