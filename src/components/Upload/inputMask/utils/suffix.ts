
export function getFileSuffix(type: 'video' | 'image' | 'all'): string {
  switch(type) {
    case 'image':
      return 'image/*'

    case 'video':
      return 'video/*'

    default:
      return 'video/*,image/*'
  }
}

export function checkFileType(files: FileList, type: 'video' | 'image' | 'all'): boolean {
  if (!files || !files?.length) return true

  for(let i = 0; i < files.length; i++) {
    const file = files[i]
    if (!file) return true

    const fileType = file.type.toLocaleLowerCase()
    if (type === 'video' && /^video\/mp4/.test(fileType) === false) return true
    if (type === 'image' && /^image\/.+/.test(fileType) === false) return true
    if (/^image\/.+|^video\/mp4/.test(fileType) !== true) return true
  }

  return false
}
