import React, {type ReactNode} from 'react';
import Layout from '@theme-original/DocItem/Layout';
import type LayoutType from '@theme/DocItem/Layout';
import type {WrapperProps} from '@docusaurus/types';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import ProtectedContent from '@site/src/components/ProtectedContent';

// Add folder paths (relative to /docs/) that should be password protected
const PROTECTED_PATHS = [
  'planning/',
];

function isProtected(docId: string): boolean {
  return PROTECTED_PATHS.some((path) => docId.startsWith(path));
}

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): ReactNode {
  const { metadata } = useDoc();

  if (isProtected(metadata.id)) {
    return (
      <ProtectedContent>
        <Layout {...props} />
      </ProtectedContent>
    );
  }

  return <Layout {...props} />;
}
