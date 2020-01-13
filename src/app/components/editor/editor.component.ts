import {Component} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {
  public Editor = ClassicEditor;

  public editorConfig = {
    resize_enabled: false,
    height: 'calc(50vh - 103px)',
    autoGrow_onStartup: true,
    extraPlugins: 'image2',
    removePlugins: 'Underline,Strike,Subscript,Superscript,Anchor,Styles,Specialchar,maximize,resize',
    toolbarGroups: [{
      name: 'basicstyles',
      groups: ['basicstyles']
    }, {
      name: 'styles',
      groups: ['styles']
    }, {
      name: 'links',
      groups: ['links']
    }, {
      name: 'paragraph',
      groups: ['list', 'blocks']
    }, {
      name: 'insert',
      groups: ['insert']
    }, {
      name: 'document',
      groups: ['mode', 'document', 'doctools']
    }],
    // Configure the Enhanced Image plugin to use classes instead of styles and to disable the
    // resizer (because image size is controlled by widget styles or the image takes maximum
    // 100% of the editor width).
    image2_alignClasses: ['image-align-left', 'image-align-center', 'image-align-right'],
    image2_disableResizer: true
  };

  constructor() {

  }

}
