/**
 * @mixin
 */
export default {
  props: {
    /**
    * The Entitity singular name
    */
    txtSingleEntitityName: {
      type: String,
      default: 'Entitity'
    },
    /**
    * The Entitity plural name
    */
    txtPluralEntitityName: {
      type: String,
      default: 'Entitities'
    },
    /**
    * Text of add button
    */
    txtAddItem: {
      type: String,
      default: 'Add Item'
    },
    /**
    * Text of edit button
    */
    txtEditItem: {
      type: String,
      default: 'Edit Item'
    },
    /**
    * Edit modal title
    */
    txtEditModalTitle: {
      type: String,
      default: 'Editing Item'
    },
    /**
    * Add modal title
    */
    txtAddModalTitle: {
      type: String,
      default: 'Adding Item'
    },
    /**
    * Save button text
    */
    txtSaveButton: {
      type: String,
      default: 'Save'
    },
    /**
    * Delete button text
    */
    txtDeleteButton: {
      type: String,
      default: 'delete'
    },
    /**
    * Search field text
    */
    txtSearchField: {
      type: String,
      default: 'Search'
    },
    txtTrashItem: {
      type: String,
      default: 'Delete Item'
    },
    txtDeleteConfirmation: {
      type: String,
      default: 'Are you sure to delete %s?'
    }
  }
}
