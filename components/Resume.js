import React, {useState} from 'react';
import {Document, Page} from './react-pdf/dist/esm/entry.webpack';
import pdfFile from './public/MontineSproulResume.pdf'

function Resume () {
    return (
        <div>
            <Document file={pdfFile}>
                <Page pageNumber={1} />
            </Document>
        <button>Download</button>
        </div>
    )
}

export default Resume;