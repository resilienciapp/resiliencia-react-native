import { gql, useMutation } from '@apollo/client'
import LocalizedStrings from 'react-native-localization'
import { strings as commonStrings } from 'src/common/strings'
import { useFlashCardContext } from 'src/contexts/FlashCardContext'
import { ReportMarker, ReportMarkerVariables } from 'src/gql/types'

const ReportMarkerMutation = gql`
  mutation ReportMarker($id: Int!) {
    reportMarker(id: $id) {
      id
    }
  }
`

export const useReportMarker = (id: number) => {
  const { showErrorMessage, showInfoMessage } = useFlashCardContext()

  const [mutate, { loading }] = useMutation<
    ReportMarker,
    ReportMarkerVariables
  >(ReportMarkerMutation, {
    onCompleted: () => showInfoMessage(strings.success),
    onError: () => showErrorMessage(commonStrings.error),
    refetchQueries: ['MarkersQuery'],
  })

  return {
    loading,
    reportMarker: () => mutate({ variables: { id } }),
  }
}

const strings = new LocalizedStrings({
  en: {
    success: 'Event reported successfully',
  },
  es: {
    success: 'Evento reportado con éxito',
  },
})
