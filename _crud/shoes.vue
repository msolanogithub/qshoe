<template></template>
<script>
export default {
  data() {
    return {
      crudId: this.$uid()
    };
  },
  computed: {
    crudData() {
      return {
        crudId: this.crudId,
        apiRoute: 'apiRoutes.qshoe.shoes',
        permission: 'ishoe.shoes',
        create: {
          title: this.$tr('ishoe.cms.newShoe')
        },
        read: {
          columns: [
            { name: 'id', label: this.$tr('isite.cms.form.id'), field: 'id', style: 'width: 50px', align: 'left' },
            { name: 'title', label: this.$tr('isite.cms.form.title'), field: 'title', align: 'left' },
            { name: 'reference', label: this.$tr('ishoe.cms.reference'), field: 'reference', align: 'left' },
            {
              name: 'basePrice', label: this.$trp('ishoe.cms.basePrice'), field: 'basePrice', align: 'left',
              format: val => this.$trn(val)
            },
            {
              name: 'optionsPrice', label: this.$trp('ishoe.cms.optionsPrice'), field: 'optionsPrice', align: 'left',
              format: val => this.$trn(val)
            },
            {
              name: 'totalPrice', label: this.$trp('ishoe.cms.totalPrice'), field: 'totalPrice', align: 'left',
              format: val => this.$trn(val)
            },
            {
              name: 'created_at', label: this.$tr('isite.cms.form.createdAt'), field: 'createdAt', align: 'left',
              format: val => val ? this.$trd(val) : '-'
            },
            { name: 'actions', label: this.$tr('isite.cms.form.actions'), align: 'left' }
          ],
          requestParams: { include: 'translations' }
        },
        update: {
          title: this.$tr('ishoe.cms.updateShoe'),
          requestParams: { include: 'translations,options' }
        },
        delete: false,
        formLeft: {
          id: { value: '' },
          userId: { value: this.$store.state.quserAuth.userId },
          title: {
            value: '',
            type: 'input',
            isTranslatable: true,
            props: {
              label: `${this.$tr('isite.cms.form.title')}*`,
              rules: [
                val => !!val || this.$tr('isite.cms.message.fieldRequired')
              ]
            }
          },
          reference: {
            value: '',
            type: 'input',
            props: {
              label: `${this.$tr('ishoe.cms.reference')}*`,
              rules: [
                val => !!val || this.$tr('isite.cms.message.fieldRequired')
              ]
            }
          },
          basePrice: {
            value: '0',
            type: 'input',
            props: {
              label: `${this.$tr('ishoe.cms.price')}*`,
              type: 'number',
              rules: [
                val => {
                  const n = parseInt(val);
                  return (!isNaN(n) && n >= 0) || this.$tr('isite.cms.message.fieldRequired');
                }
              ]
            }
          },
          options: {
            value: [],
            type: 'treeSelect',
            props: {
              label: this.$trp('isite.cms.form.option'),
              multiple: true,
              disableBranchNodes: true
            },
            loadOptions: {
              apiRoute: 'apiRoutes.qshoe.options',
              requestParams: { include: 'parent.translations,translations' },
              select: {
                label: (row) => {
                  if (row.parent) return `[${row.parent.title}] ${row.title}`;
                  return row.title;
                },
                id: 'id'
              }
            }
          }
        }
      };
    },
    //Crud info
    crudInfo() {
      return this.$store.state.qcrudComponent.component[this.crudId] || {};
    }
  }
};
</script>
